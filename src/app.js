const storage = window.localStorage

const renderContacts = () => {
const contacts = JSON.parse(storage.getItem('contacts'))
let div = document.querySelector('.contact-list')
if (contacts) {
    div.innerHTML = ''
    const ul = document.createElement('ul')
    ul.className = "list-reset";
    contacts.forEach(contact => {
        let li = document.createElement('li')
        li.innerHTML = `
          <div class="card" class="bg-teal mx-auto max-w-lg shadow-lg rounded-lg overflow-hidden">
            <div class="image" class="sm:flex sm:items-center px-6 py-4">
              <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://lh3.googleusercontent.com/Y9fTQTS97Um1XW3vN9UNH_YNEol5BtjoeLlkqWamegZn7yCDXG5CxHA1Dd37oDa4tQAl39S4t0Fl4A_Rqz9exNSSs2DOgQsqdoJnnIGK-2jLmbEntVFqDMysEldee1tbE3Y1m_BboZCB_Alw2WgxSCOoWOXK8lZZ5ikyqjCWa4l9_5KP-gGC8ddokgF5SRu2qPaXeZhe68Sx00pPiUvF4P4-bSdpf5O6Vrs8NrobFaHvBYzz-1o7jTsziffa8HKe5W_HIK_UQ88t0driJSK9GNtYcmh2D0B_uAITbU8W6hf4Vw6Utb8U3sDCp5lCE8WGiRDvqK_TBx0K6bxuXRtFa9OdIilC2l7Q2vxXY76RkZLgjIIX3Oh4qsngfCHfXrszB2lLOBcS62r98asR7DoxXLMXC0547oT0FbTAlZpm3ElUqryIvWsPOytdezwqGwY1ujxpyTwQ1yXRJKi4p3dQY1lNb56zbQ8LUL7UbJlutNmZY-bpcxoOPlx6rvjRnMYI9NzJhl_Ek0woksDYUmSF1UjhUDDOKOFh1GIYQSmvo8MCE5vSvKSh2JxxHcI1itDnwTRlkSewPxualXplD9jfMNIvceli4hMHpxeJKIzG1lwz7znWxnCJ2K5mNjKLRPJW=s766-no" alt="image" />
              <div class="text-center sm:text-left sm:flex-grow">            
            <div class="content mb-4 pt-6">
              <h1 class="text-md leading-tight">${ contact.name }</h1>
              <h2 class="text-sm leading-tight text-grey-darkest">${ contact.company }</h2>
              <p class="text-sm leading-tight text-grey-darkest">${ contact.notes }</p> 
              <p class="text-sm leading-tight text-grey-darkest">${ contact.email } | 
              <a class="text-sm leading-tight text-grey-darkest" href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
            </div>
          </div>
       `
        ul.appendChild(li)
        li.className = "list-reset pt-4"
      })

      div.appendChild(ul) 
    } else { 
      div.innerHTML = '<p class="text-white text-lg pt-2 ">You have no contacts in your address book</p>' 
    }
  }
  

document.addEventListener('DOMContentLoaded', () =>{
    renderContacts()
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
    })