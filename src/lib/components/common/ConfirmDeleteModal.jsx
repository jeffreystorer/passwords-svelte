import { useRecoilState,  useRecoilValue
   } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { deleteItem } from '@/services';
import * as state from '@/store';
import '@/styles/index.css';

export default function ConfirmDeleteModal(){
  const navigate = useNavigate();
  const [showModal, setShowModal] = useRecoilState(state.showModal);
  const page = useRecoilValue(state.page);
  const currentKey = useRecoilValue(state.currentKey);
  const userId = useRecoilValue(state.userId);
  const [pwData, setPWData] = useRecoilState(state.pwData);
  const rowIndex = useRecoilValue(state.rowIndex);
  const [ccData, setCCData]= useRecoilState(state.ccData);

  
  function handleDelete(){

    switch (page) {
      case 'passwords':        
      try {
        deleteItem(userId, currentKey);
        const updatedData = pwData.filter((_, i) => i !== rowIndex);
        setPWData(updatedData);
      } catch (error) {
        console.log(error);
      }
        setShowModal(false);
        navigate('/pages/passwords');
        break;
      case 'creditcards':
        try {
          deleteItem(userId, currentKey);
          const updatedData = ccData.filter((_, i) => i !== rowIndex);
          setCCData(updatedData);
        } catch (error) {
          console.log(error);
        }
        
        setShowModal(false);
        navigate('/pages/creditcards');
        break;
      default:
        break;
    }
    
  };
  
  function handleClose(e){
    e.preventDefault();
    setShowModal(false);
    let path;
    switch (page) {
      case 'passwords':
        path = '/pages/passwords';
        break;
      case 'creditcards':
        path = '/pages/creditcards';
        break;
      default:
        break;
    }
    navigate(path);
  }

  const className = showModal ? 'open modalClose' : 'modalClose'

  return (
    <div id='modal' className={className} onClick={handleClose}>
      <section>
        <header>
          <h2>Heads up!</h2><a className='modalClose' onClick={handleClose} hidden></a>
        </header>
        <p>Are you sure you want to delete this item?</p>
        <footer>
          <button className='not-stacked modalClose' onClick={handleClose}>
            Cancel
          </button>
          <button className='not-stacked' onClick={handleDelete}>
            Delete
          </button>
        </footer>
      </section>
    </div>
  );
}
