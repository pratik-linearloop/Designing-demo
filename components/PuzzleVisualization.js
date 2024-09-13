'use client'

import { Box, SimpleGrid } from '@chakra-ui/react'

const GRID_SIZE = 10 // 10x10 grid for 100 pieces

export default function PuzzleVisualization({ teams, totalPieces }) {
  const pieces = Array(GRID_SIZE * GRID_SIZE).fill(null)

  // Assign pieces to teams
  let assignedPieces = 0
  teams.forEach((team, teamIndex) => {
    for (let i = 0; i < team.pieces; i++) {
      if (assignedPieces < pieces.length) {
        pieces[assignedPieces] = teamIndex
        assignedPieces++
      }
    }
  })

  return (
    <Box borderWidth={2} borderColor="gray.300" p={2}>
      <SimpleGrid columns={GRID_SIZE} spacing={1}>
        {pieces.map((teamIndex, index) => (
          <Box
            key={index}
            bg={teamIndex !== null ? `team${teamIndex + 1}.500` : 'gray.200'}
            w="20px"
            h="20px"
            border="1px solid"
            borderColor="gray.300"
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}