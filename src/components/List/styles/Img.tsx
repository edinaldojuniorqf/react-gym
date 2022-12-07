import { ImgHTMLAttributes } from 'react'
import styled from 'styled-components'

type Props = ImgHTMLAttributes<HTMLImageElement>

export const Img = styled.img<Props>`
	border-radius: 6px;
	margin-right: 1rem;
	width: 67px;
	height: 67px;
`