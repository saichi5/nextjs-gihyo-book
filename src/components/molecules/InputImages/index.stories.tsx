import { Meta } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'
import InputImages, { FileData } from './'

const meta: Meta<typeof InputImages> = {
  title: 'Molecules/InputImages',
  component: InputImages,
  tags: ['autodocs'],
}

export default meta

const Container = styled.div`
  width: 288px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
`

export const Standard = () => {
  const [images, setImages] = useState<FileData[]>([])

  const handleChange = (images: FileData[]) => {
    setImages(images)
  }

  return (
    <Container>
      <InputImages images={images} onChange={handleChange} maximumNumber={2} />
    </Container>
  )
}
