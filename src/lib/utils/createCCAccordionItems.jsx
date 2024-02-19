import { v4 as uuidv4} from 'uuid'

export default function createCCAccordionItems(
  ccData,
  handleDelete,
  handleEdit,
  handleClickNumber,
  handleClickCopyNumber
) {
  return ccData?.map((cc, index) => (
    <details key={uuidv4()}>
      <summary>{cc.name}</summary> 
        <table><tbody>{cc.number && (
        <tr>
          <th>Number:</th>        
          <td
            onClick={() => handleClickNumber(index)}>
            {cc.number}
          </td>
        </tr>
      )}      
      {cc.expiration && (
        <tr> 
          <th>
            Exp.:
          </th>
          <td>
            {cc.expiration}
          </td>
        </tr>
      )}
      {cc.cvc && (
        <tr><th>CVC:</th><td>{cc.cvc}</td></tr>
      )}
      {cc.notes && (
        <tr><th>Notes:</th><td>{cc.notes}</td></tr>
      )} 
      </tbody></table>            
        <footer>
          <button onClick={() => handleEdit(index)}
          >
            Edit
          </button>
          <button onClick={() => handleDelete(index)}>
            Delete
          </button>
          <button
            onClick={() => handleClickCopyNumber(index)}>
            Copy
          </button>
        </footer>
    </details>
  ));
}
