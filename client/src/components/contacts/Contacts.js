import React, { Fragment, useContext, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

function Contacts() {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts(); //this will run once the component loads

    // eslint-disable-next-line
  }, []);

  if (contacts !==null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <div>
          {filtered !== null && filtered !== undefined
            ? filtered.map((contact) => {
                return <ContactItem key={contact._id} contact={contact} />;
              })
            : contacts.map((contact) => {
                return <ContactItem key={contact._id} contact={contact} />;
              })}
        </div>
      ) : ( 
        <Spinner />
      )}
    </Fragment>
  );
}

export default Contacts;
