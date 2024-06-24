import { useNavigate } from 'react-router-dom';
import {DirectoryItemContainer, Body, BackgroundImage} from './directory-item.styles';

const DirectoryItem = ({category}) => {

  const { id, title, imageUrl, route } = category;
  const navigate = useNavigate();
  
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
      <BackgroundImage imageurl={imageUrl}/>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )

}

export default DirectoryItem;