'use client'

import { Box, SimpleGrid, Image } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const GRID_SIZE = 5 // 5x5 grid for 25 pieces

export default function PuzzleVisualization({ pieces, teams }) {
  const [imageSrc, setImageSrc] = useState('')

  useEffect(() => {
    // Load the image dynamically to avoid SSR issues
    setImageSrc('/puzzle-image.jpg')
  }, [])

  return (
    <Box borderWidth={2} borderColor="gray.300" p={2} position="relative">
      <Image src={imageSrc} alt="Puzzle" opacity={0.5} position="absolute" top={0} left={0} width="100%" height="100%" />
      <SimpleGrid columns={GRID_SIZE} spacing={1}>
        {pieces.map((piece) => (
          <Box
            key={piece.id}
            bg={piece.ownedBy !== null ? `team${piece.ownedBy + 1}.500` : 'gray.200'}
            opacity={piece.ownedBy !== null ? 1 : 0.7}
            w="60px"
            h="60px"
            border="1px solid"
            borderColor="gray.300"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="sm"
            fontWeight="bold"
          >
            {piece.value}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}