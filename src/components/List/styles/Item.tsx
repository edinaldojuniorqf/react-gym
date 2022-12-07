import styled from 'styled-components'

export const Item = styled.div`
	display: flex;
	border-radius: 8px;
	background-color: ${props => props.theme.colors.gray_500};
	padding: 0.5rem 1.75rem 0.5rem 0.5rem;
	margin-bottom: 0.8rem;
	cursor: pointer;

	&:hover {
		background-color: ${props => props.theme.colors.gray_400};;
	}
`