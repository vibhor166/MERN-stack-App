import React, { useContext, useRef, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';

function ContactFilter() {
  const contactContext = useContext(ContactContext);
  const { clearFilter, filterContacts, filtered } = contactContext;
  const text = useRef('');

//   const [filtertext, setFiltertext] = useState('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const handleChange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
    // setFiltertext(e.target.value);
    // if (filtertext !== '') {
      
    //   filterContacts(filtertext);
    // } else {
    //   clearFilter();
    // }
  };
  return (
    <div>
      <form>
        <input
            ref={text}
        //   value={filtertext}
          type='text'
          placeholder='Filter Contacts...'
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default ContactFilter;
