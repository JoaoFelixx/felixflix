import { localizedStrings } from '../../constants/localizedStrings';
import { FileSearchOutlined } from '@ant-design/icons';
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
					<FileSearchOutlined 
						style={{position: 'relative', float: 'right', top: '5px'}} />
				</Questions>
				<Questions> 
					{ localizedStrings.howMunchIsFelixflix } 
					<FileSearchOutlined 
						style={{position: 'relative', float: 'right', top: '5px'}} />
				</Questions>
				<Questions> 
					{ localizedStrings.canWhereWatch } 
					<FileSearchOutlined 
						style={{position: 'relative', float: 'right', top: '5px'}} />
				</Questions>
				<Questions> 
					{ localizedStrings.howDoICancel }
					<FileSearchOutlined 
						style={{position: 'relative', float: 'right', top: '5px'}} />
				</Questions>
				<Questions> 
					{ localizedStrings.whatCanIWatchOnFelixflix }
					<FileSearchOutlined 
						style={{position: 'relative', float: 'right', top: '5px'}} />
			 	</Questions>
				<Questions> 
					{ localizedStrings.IsFelixflixSuitableForChildren }
					<FileSearchOutlined 
						style={{position: 'relative', float: 'right', top: '5px'}} />
				</Questions>
			</CentralizedContent>

		</FlexContainer>
	)
}