import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 64px;
		height: 64px;
		border-radius: 1000px;
		border: 2px solid ${props => props.theme.colors.gray_400};
	}
`