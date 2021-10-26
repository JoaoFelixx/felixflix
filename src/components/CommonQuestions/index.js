import { localizedStrings } from '../../constants/localizedStrings'
import { useState } from 'react';
import { FileSearchOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import {  
	FlexContainer,
	CentralizedContent,
	Questions,
	TitleCommonQuestion,
} from '../StyledComponents';

export const CommonQuestion = () => {

	const [isModalVisible, setIsModalVisible] = useState(false);
	const [whichQuestionWasClicked,setWhichQuestionWasClicked] = useState(0)

	const showModal = (questionClicked) => {
		setIsModalVisible(true);
		setWhichQuestionWasClicked(questionClicked);
	}

	const handleOk = () => setIsModalVisible(false);

	const handleCancel = () => setIsModalVisible(false);

	return (
		<FlexContainer>
			<CentralizedContent>
			<TitleCommonQuestion> {  } </TitleCommonQuestion>
				<Questions onClick={() => showModal(1)}> 
					O que é a Netflix ? 
					<FileSearchOutlined 
						style={{position: 'relative', float: 'right', top: '5px'}} />
				</Questions>
				<Questions onClick={showModal}> 
					Quanto custa a Netflix ? 
					<FileSearchOutlined 
						style={{position: 'relative', float: 'right', top: '5px'}} />
				</Questions>
				<Questions onClick={showModal}> 
					Onde posso assistir ? 
					<FileSearchOutlined 
						style={{position: 'relative', float: 'right', top: '5px'}} />
				</Questions>
				<Questions onClick={showModal}> 
					Como faço para cancelar ?
					<FileSearchOutlined 
						style={{position: 'relative', float: 'right', top: '5px'}} />
				</Questions>
				<Questions onClick={showModal}> 
					O que eu posso assistir na Netflix ?
					<FileSearchOutlined 
						style={{position: 'relative', float: 'right', top: '5px'}} />
			 	</Questions>
				<Questions onClick={showModal}> 
					A Netflix é adequeada para crianças ?
					<FileSearchOutlined 
						style={{position: 'relative', float: 'right', top: '5px'}} />
				</Questions>
			</CentralizedContent>
			
			<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
	        <p> { console.log(localizedStrings) } </p>
	    </Modal>

		</FlexContainer>
	)
}