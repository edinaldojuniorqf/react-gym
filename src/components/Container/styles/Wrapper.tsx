import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	box-sizing: border-box;

	@media screen and (min-width: 480px) {
		max-width: 440px;
		margin: 0 auto;
	}
`