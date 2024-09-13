'use client'

import { useState, useEffect } from 'react'
import { 
  Box, VStack, HStack, Text, Button, NumberInput, NumberInputField, 
  NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
  useToast, Flex, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon
} from '@chakra-ui/react'
import PuzzleVisualization from './PuzzleVisualization'

const INITIAL_CURRENCY = 1000
const TOTAL_PIECES = 9
const GRID_SIZE = 3

const initialTeams = [
    { name: 'Google Devs', pieces: 0, currency: INITIAL_CURRENCY, score: 0 },
    { name: 'Microsoft Coders', pieces: 0, currency: INITIAL_CURRENCY, score: 0 },
    { name: 'Apple Engineers', pieces: 0, currency: INITIAL_CURRENCY, score: 0 },
    { name: 'Amazon Builders', pieces: 0, currency: INITIAL_CURRENCY, score: 0 },
    { name: 'Facebook Hackers', pieces: 0, currency: INITIAL_CURRENCY, score: 0 },
    { name: 'Tesla Innovators', pieces: 0, currency: INITIAL_CURRENCY, score: 0 },
]

export default function PuzzleAuction() {
  const [teams, setTeams] = useState(initialTeams)
  const [pieces, setPieces] = useState([])
  const [currentPieceIndex, setCurrentPieceIndex] = useState(0)
  const [winningTeam, setWinningTeam] = useState(null)
  const [winningBid, setWinningBid] = useState(0)
  const toast = useToast()

  useEffect(() => {
    resetGame()
  }, [])

  const handleAuction = () => {
    if (winningTeam === null || winningBid <= 0) {
      toast({
        title: "Invalid auction",
        description: "Please select a team and enter a valid bid.",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
      return
    }

    const selectedTeam = teams[winningTeam]
    if (selectedTeam.currency < winningBid) {
      toast({
        title: "Insufficient funds",
        description: `${selectedTeam.name} doesn't have enough currency for this bid.`,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
      return
    }

    const currentPiece = pieces[currentPieceIndex]

    setTeams(teams.map((team, index) => {
      if (index === winningTeam) {
        return {
          ...team,
          pieces: team.pieces + 1,
          currency: team.currency - winningBid,
          score: team.score + currentPiece.value
        }
      }
      return team
    }))

    setPieces(prevPieces => {
      const updatedPieces = prevPieces.map((piece, index) => 
        index === currentPieceIndex ? { ...piece, ownedBy: winningTeam } : piece
      )
      return updatedPieces
    })

    setCurrentPieceIndex(prevIndex => {
      const unownedPieces = pieces.filter(piece => piece.ownedBy === null)
      if (unownedPieces.length > 0) {
        const randomIndex = Math.floor(Math.random() * unownedPieces.length)
        return pieces.findIndex(piece => piece.id === unownedPieces[randomIndex].id)
      }
      return prevIndex
    })

    setWinningTeam(null)
    setWinningBid(0)

    toast({
      title: "Auction completed",
      description: `${selectedTeam.name} won piece ${currentPiece.id} for $${winningBid}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    })

    checkGameEnd()
  }

  const checkGameEnd = () => {
    const unownedPieces = pieces.filter(piece => piece.ownedBy === null)
    if (unownedPieces.length === 0) {
      const winner = teams.reduce((prev, current) => 
        (prev.score > current.score) ? prev : current
      )
      toast({
        title: "Game Over!",
        description: `${winner.name} wins with a score of ${winner.score}!`,
        status: "info",
        duration: null,
        isClosable: true,
      })
    }
  }

  const resetGame = () => {
    setTeams(initialTeams)
    const newPieces = Array.from({ length: TOTAL_PIECES }, (_, i) => ({
      id: i,
      value: Math.floor(Math.random() * 50) + 10,
      ownedBy: null
    }))
    setPieces(newPieces)
    setCurrentPieceIndex(Math.floor(Math.random() * TOTAL_PIECES))
    setWinningTeam(null)
    setWinningBid(0)
  }

  const currentPiece = pieces[currentPieceIndex]

  return (
    <Box p={5}>
      <VStack spacing={5} align="stretch">
        <Text fontSize="2xl">Puzzle Auction Game</Text>
        <HStack spacing={10} align="flex-start">
          <VStack align="stretch" flex={1}>
            {currentPiece && (
              <Box borderWidth={2} p={4} borderRadius="lg" bg="blue.100" shadow="md">
                <Text fontSize="lg" fontWeight="bold" mb={2}>Current Piece Details</Text>
                {/* <Text>ID: <strong>{currentPiece.id}</strong></Text> */}
                <Text fontSize="48px">Value: <strong>{currentPiece.value}</strong></Text>
              </Box>
            )}
            <VStack align="stretch">
              {teams.map((team, index) => (
                <HStack key={index} justify="space-between">
                  <Text color={`team${index + 1}.500`} fontWeight="bold" width="150px">{team.name}</Text>
                  <Text>Pieces: {team.pieces}</Text>
                  <Text>Currency: ${team.currency}</Text>
                  <Text>Score: {team.score}</Text>
                  <Button 
                    onClick={() => setWinningTeam(index)}
                    colorScheme={winningTeam === index ? `team${index + 1}` : "gray"}
                  >
                    Select
                  </Button>
                </HStack>
              ))}
            </VStack>
            <HStack>
              <Text>Winning Bid:</Text>
              <NumberInput 
                value={winningBid} 
                onChange={(valueString) => setWinningBid(Number(valueString))}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </HStack>
            <Flex justifyContent="space-between" width="100%" marginTop={2}>
              <Button onClick={handleAuction} colorScheme="blue" width="40%">
                Complete Auction
              </Button>
              <Button onClick={resetGame} colorScheme="red">
                Reset Game
              </Button>
            </Flex>
          </VStack>
          <Box>
            <Text fontSize="xl" mb={2}>Puzzle Progress</Text>
            <PuzzleVisualization pieces={pieces} teams={teams} />
          </Box>
        </HStack>
      </VStack>
      
      {/* Add the learning objectives section */}
      <Box my={32}>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize="2xl">
                  What can you learn from this game?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack align="start" spacing={4}>
                <Text fontSize="lg">This Puzzle Auction Game teaches several key concepts:</Text>
                <Text fontSize="lg">1. Resource Management: Players must balance their currency to bid on pieces strategically.</Text>
                <Text fontSize="lg">2. Decision Making: Choosing which pieces to bid on and how much to bid requires critical thinking.</Text>
                <Text fontSize="lg">3. Risk Assessment: Players must evaluate the potential value of each piece against its cost.</Text>
                <Text fontSize="lg">4. Competitive Strategy: Understanding and reacting to other teams&apos; actions is crucial for success.</Text>
                <Text fontSize="lg">5. Collaboration: Within teams, players must work together to make optimal decisions.</Text>
                <Text fontSize="lg">6. Pattern Recognition: Identifying valuable piece combinations can lead to higher scores.</Text>
                <Text fontSize="lg">7. Adaptability: As the game progresses, strategies may need to change based on available pieces and resources.</Text>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  )
}