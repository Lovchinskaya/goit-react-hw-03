import Contact from '../Contact/Contact'


export default function ContactList ({contacts, onDelete}){
    
    return (
        <div>
            <Contact contacts={contacts} forDelete={onDelete}/>
        </div>
    )
}