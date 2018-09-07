const storage = window.localStorage

const renderContacts = () => {
const contacts = JSON.parse(storage.getItem('contacts'))
let div = document.querySelector('.contact-list')
console.log(contacts)
if (contacts) {
    div.innerHTML = ''
    const ul = document.createElement('ul')
    contacts.forEach(contact => {
        let li = document.createElement('ul')
        li.innerHTML = `
          <div class="card">
            <div class="image">
              <img src="https://www.coburgbanks.co.uk/wp-content/uploads/2015/08/linkedin-no-profile-picture-300x333.jpg" />
            </div>
            <div class="content">
              <h1>${ contact.name }</h1>
              <h2>${ contact.company }</h2>
              <p>${ contact.notes }</p> 
              ${ contact.email } | 
              <a href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
            </div>
          </div>
       `
        ul.appendChild(li)
      })

      div.appendChild(ul) 
  } else { 
      div.innerHTML = '<p>You have no contacts in your address book</p>' 
  }
}

const renderForm = () => {
    let main = document.querySelector('.main')
    let wrapper = document.createElement('div')
    wrapper.innerHTML = `
        <h3>New Contact Form</h3>
        <form class="new-contact-form mb-6" action="#">
        <div class="flex flex-col mb-4" 
                <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="name">Name</label>
                <input class="border py-2 px-3 text-grey-darkest" id="contact-name" name="name" type="text">
        </div>
        <div class="flex flex-col mb-4" 
            <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Email</label>
            <input class="border py-2 px-3 text-grey-darkest" id="contact-email" name="email" type="email">
        </div>
        <div class="flex flex-col mb-4" 
            <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="phone">Phone</label>
            <input class="border py-2 px-3 text-grey-darkest" id="contact-phone" name="phone" type="phone">
        </div>
        <div class="flex flex-col mb-4" 
            <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="company">Company</label>
            <input class="border py-2 px-3 text-grey-darkest" id="contact-company" name="company" type="company">
        </div>
        <div class="flex flex-col mb-4" 
            <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="notes">Notes</label>
            <input class="border py-2 px-3 text-grey-darkest" id="contact-notes" name="notes" type="textarea">
        </div>
        <div class="flex flex-col mb-4" 
            <label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="twitter">Twitter</label>
            <input class="border py-2 px-3 text-grey-darkest" id="contact-twitter" name="twitter" type="text">
        </div> 
            <div>    
            <button class="save-contact bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full align-center" type="submit">Save Contact</button>
            </div>
        </form>    
      `
      main.appendChild(wrapper)
      const addContactForm = document.querySelector('.new-contact-form')
    addContactForm.addEventListener('submit', event => {
        event.preventDefault()
        

        const{
            name,
            email,
            phone,
            company,
            notes,
            twitter,
        } = addContactForm.elements

        const contact = {
            id: Date.now(),
            name: name.value,
            email: email.value,
            phone: phone.value,
            company: company.value,
            notes: notes.value,
            twitter: twitter.value,
        }

        console.log(`Saving the following contact: ${JSON.stringify(contact)}`);
        
        let contacts = JSON.parse(storage.getItem('contacts')) || []
        contacts.push(contact)
        storage.setItem('contacts', JSON.stringify(contacts))
        renderContacts()
        addContactForm.reset()
    })
}
  

document.addEventListener('DOMContentLoaded', () =>{
    renderContacts()
    document.querySelector('button').addEventListener('click', () => {renderForm()})
    
}) 