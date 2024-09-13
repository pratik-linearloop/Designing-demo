'use client'

import { useState, useEffect } from 'react'
import { 
  Box, VStack, HStack, Text, Button, Input, 
  NumberInput, NumberInputField, NumberInputStepper, 
  NumberIncrementStepper, NumberDecrementStepper,
  useToast
} from '@chakra-ui/react'
import PuzzleVisualization from './PuzzleVisualization'

const initialTeams = [
  { name: 'Team 1', pieces: 0, currency: 1000 },
  { name: 'Team 2', pieces: 0, currency: 1000 },
  { name: 'Team 3', pieces: 0, currency: 1000 },
  { name: 'Team 4', pieces: 0, currency: 1000 },
  { name: 'Team 5', pieces: 0, currency: 1000 },
  { name: 'Team 6', pieces: 0, currency: 1000 },
]

const TOTAL_PIECES = 100 // 10x10 grid

export default function PuzzleAuction() {
  const [teams, setTeams] = useState(initialTeams)
  const [totalPieces, setTotalPieces] = useState(TOTAL_PIECES)
  const [auctionPieces, setAuctionPieces] = useState(5)
  const [winningTeam, setWinningTeam] = useState(null)
  const [winningBid, setWinningBid] = useState(0)
  const toast = useToast()

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

    if (auctionPieces > totalPieces) {
      toast({
        title: "Invalid auction",
        description: "Not enough pieces available for this auction.",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
      return
    }

    setTeams(teams.map((team, index) => {
      if (index === winningTeam) {
        return {
          ...team,
          pieces: team.pieces + auctionPieces,
          currency: team.currency - winningBid
        }
      }
      return team
    }))
    setTotalPieces(totalPieces - auctionPieces)
    setWinningTeam(null)
    setWinningBid(0)

    toast({
      title: "Auction completed",
      description: `${selectedTeam.name} won ${auctionPieces} pieces for $${winningBid}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }

  const resetGame = () => {
    setTeams(initialTeams)
    setTotalPieces(TOTAL_PIECES)
    setAuctionPieces(5)
    setWinningTeam(null)
    setWinningBid(0)
  }

  return (
    <Box p={5}>
      <VStack spacing={5} align="stretch">
        <Text fontSize="2xl">Puzzle Auction Game</Text>
        <HStack spacing={10} align="flex-start">
          <VStack align="stretch" flex={1}>
            <Text>Total Pieces Remaining: {totalPieces}</Text>
            <HStack>
              <Text>Pieces for Auction:</Text>
              <NumberInput 
                value={auctionPieces} 
                onChange={(valueString) => setAuctionPieces(Number(valueString))}
                min={1} 
                max={totalPieces}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </HStack>
            <VStack align="stretch">
              {teams.map((team, index) => (
                <HStack key={index} justify="space-between">
                  <Text color={`team${index + 1}.500`} fontWeight="bold">{team.name}</Text>
                  <Text>Pieces: {team.pieces}</Text>
                  <Text>Currency: ${team.currency}</Text>
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
            <Button onClick={handleAuction} colorScheme="blue">
              Complete Auction
            </Button>
            <Button onClick={resetGame} colorScheme="red">
              Reset Game
            </Button>
          </VStack>
          <Box>
            <Text fontSize="xl" mb={2}>Puzzle Progress</Text>
            <PuzzleVisualization teams={teams} totalPieces={TOTAL_PIECES} />
          </Box>
        </HStack>
      </VStack>
    </Box>
  )
}