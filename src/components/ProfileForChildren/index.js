import {
	FlexContainer,
	Content,
	Image,
	Description,
	SubDescription,
} from '../StyledComponents'

export const ProfileForChildren = () => {
	return (
		<FlexContainer>
			<Content>
				<Image 
					loading="lazy"	
					style={{ width: '100%', padding: '14px'}} 
					src="./img/kids-watch-tv.jpg" 
					alt="crianças assistindo TV"/> 
			</Content>
			<Content 
				style={{ position: 'relative', top: '40px' }}>
				<Description> Crie perfis para crianças. </Description>
				<SubDescription> 
					Deixe as crianças se aventurarem com seus personagens favoritos em 
					um espaço feito só para elas, sem pagar a mais por isso.
				</SubDescription>
			</Content>
		</FlexContainer>
	)
}