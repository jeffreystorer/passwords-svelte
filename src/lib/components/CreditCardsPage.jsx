import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Loading } from '@/components/common';
import { getItems} from '@/services';
import { createCCAccordionItems } from '@/utils';
import * as state from '@/store';

export default function CreditCardsPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const setShowModal = useSetRecoilState(state.showModal);
  const setCurrentKey = useSetRecoilState(state.currentKey);
  const setRowIndex = useSetRecoilState(state.rowIndex);
  const setPage = useSetRecoilState(state.page)
  const [ccData, setCCData] = useRecoilState(state.ccData);
  const userId = useRecoilValue(state.userId);

  useEffect(() => {
    getItems(userId).then((data) => {
      let creditCardArray = [];
      for (const [key, value] of Object.entries(data)) {
        if (value.type === 'cc') {
          creditCardArray.push({
            key: key,
            name: value.name,
            number: value.number,
            expiration: value.expiration,
            cvc: value.cvc,
            notes: value.notes,
          });
        }
      }
      creditCardArray.sort((a, b) => (a.name > b.name ? 1 : -1));
      setCCData(creditCardArray);
      setLoading(false);
    });
  }, [setCCData, userId]);

  function handleDelete(i){
    setPage('creditcards');
    setCurrentKey(ccData[i].key);
    setRowIndex(i);
    setShowModal(true);
    navigate('/pages/confirmdelete')
  };

  function handleEdit(i){
    navigate('/pages/editcreditcard/' + i)    
  }

  const copyToClipboard = (str) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(str);
    return Promise.reject('The Clipboard API is not available.');
  };

  const handleClickNumber = (i) => {
    copyToClipboard(ccData[i].number);
  };
  const handleClickCopyNumber = (i) => {
    copyToClipboard(ccData[i].number);
  };
  const items = createCCAccordionItems(
    ccData,
    handleDelete,
    handleEdit,
    handleClickNumber,
    handleClickCopyNumber
  );

  if (loading) return <Loading />;

  return (  
    <div id='creditcards'>
      {items}
    </div> 
  );
}
