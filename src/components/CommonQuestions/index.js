import { localizedStrings } from '../../constants/localizedStrings';
import {  
	FlexContainer,
	CentralizedContent,
	Questions,
	TitleCommonQuestion,
} from '../StyledComponents';

export const CommonQuestion = () => {
	return (
		<FlexContainer>
			<CentralizedContent>
			<TitleCommonQuestion> { localizedStrings.commonQuestion } </TitleCommonQuestion>
				<Questions> 
					{ localizedStrings.whatIsFelixflix } 
				</Questions>
				<Questions> 
					{ localizedStrings.howMunchIsFelixflix } 
				</Questions>
				<Questions> 
					{ localizedStrings.canWhereWatch } 
				</Questions>
				<Questions> 
					{ localizedStrings.howDoICancel }
				</Questions>
				<Questions> 
					{ localizedStrings.whatCanIWatchOnFelixflix }
			 	</Questions>
				<Questions> 
					{ localizedStrings.IsFelixflixSuitableForChildren }
				</Questions>
			</CentralizedContent>
		</FlexContainer>
	)
}