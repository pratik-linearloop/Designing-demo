'use client'

import { Box, SimpleGrid, Image, Text, Flex } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const GRID_SIZE = 3 // 3x3 grid for 9 pieces

export default function PuzzleVisualization({ pieces, teams }) {
  const [imageSrc, setImageSrc] = useState('')

  useEffect(() => {
    setImageSrc('/puzzle-image.jpg')
  }, [])

  return (
    <Box 
      borderWidth={2} 
      borderColor="gray.300" 
      borderRadius="lg"
      overflow="hidden"
      position="relative" 
      width="450px" 
      height="450px"
      boxShadow="lg"
    >
      <Image 
        src={imageSrc} 
        alt="Puzzle" 
        position="absolute" 
        top={0} 
        left={0} 
        width="100%" 
        height="100%" 
        objectFit="fill" 
      />
      <SimpleGrid 
        columns={GRID_SIZE} 
        spacing={1} 
        height="100%" 
        width="100%" 
        position="absolute" 
        top={0} 
        left={0}
      >
        {pieces.map((piece) => (
          <Flex
            key={piece.id}
            bg={piece.ownedBy !== null ? 'transparent' : 'rgba(255, 255, 255, 0.7)'}
            border="1px solid"
            borderColor="gray.300"
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            <Text 
              fontSize="3xl" 
              fontWeight="bold" 
              color={piece.ownedBy !== null ? 'white' : 'black'}
              textShadow={piece.ownedBy !== null ? '1px 1px 2px rgba(0,0,0,0.8)' : 'none'}
            >
              {piece.value}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  )
}