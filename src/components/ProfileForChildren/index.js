import { localizedStrings } from '../../constants/localizedStrings'
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
				<Description>{ localizedStrings.createProfilesForKids }</Description>
				<SubDescription>{ localizedStrings.letKidsAdventures }</SubDescription>
			</Content>
		</FlexContainer>
	)
}