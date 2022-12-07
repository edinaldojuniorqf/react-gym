import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	background-color: ${props => props.theme.colors.gray_600};
	padding: 1.25rem ${props => props.theme.spacing.content};
	color: ${props => props.theme.colors.gray_100};
`