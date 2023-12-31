/*  Author: C. Tejeda
    Date: 11.11.23
    Purpose: Week5 day2 homework */

// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
        {text: 'all', href: '/catalog/all'},
        {text: 'top selling', href: '/catalog/top'},
        {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
        {text: 'new', href: '/orders/new'},
        {text: 'pending', href: '/orders/pending'},
        {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
        {text: 'profile', href: '/account/profile'},
        {text: 'sign out', href: '/account/signout'},
    ]},
  ];

// console.log(menuLinks[2])

const body = document.querySelector('body')
/* Task 1.0 - Select and cache the <main>element in a variable named mainEl. */
const mainEl = document.querySelector('#main')

/* Task 1.1 - Set the background color of mainElto the value stored in the --main-bgCSS custom property. */
mainEl.style.backgroundColor = '#4a4e4d'

/* Task 1.2 - Set the content of mainElto <h1>SEI Rocks!</h1>. */
const h1 = document.createElement('h1')
h1.innerHTML = 'SEI Rocks!'
mainEl.appendChild(h1)

/* Task 1.3 - Add a class of flex-ctr to mainEl. */
mainEl.className = "flex-ctr"

/* Task 2.0 - Select and cache the <nav id="top-menu">element in a variable named topMenuEl. */
const topMenuEl = document.querySelector('#top-menu')

/* Task 2.1 - Set the height topMenuElelement to be 100%. */
topMenuEl.style.height = '100%'

/* Task 2.2 - Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property. */
topMenuEl.style.backgroundColor = '#0e9aa7'

/* Task 2.3 - Add a class of flex-aroundto topMenuEl. */
topMenuEl.className = 'flex-around'

/* Task 3.1 - Iterate over the entire menuLinksarray and for each "link" object:
    Create an <a>element.
    On the new element, add an href attribute with its value set to the href property of the "link" object.
    Set the new element's content to the value of the text property of the "link" object.
    Append the new element to the topMenuElelement. */

menuLinks.forEach((arr, i)=>{
    const aTag = document.createElement('a')
    const link = document.createTextNode(menuLinks[i].text)
    aTag.appendChild(link)
    aTag.href = menuLinks[i].href
    topMenuEl.appendChild(aTag)
})

/* Task 4.0 - Select and cache the <nav id="sub-menu">element in a variable named subMenuEl. */
const subMenuEl = document.querySelector('#sub-menu')

/* Task 4.1 - Set the height subMenuElelement to be 100%. */
subMenuEl.style.height = '100%'

/* Task 4.2 - Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property. */
subMenuEl.style.backgroundColor = '#3da4ab'

/* Task 4.3 - Add the class of flex-aroundto the subMenuElelement. */
subMenuEl.className = 'flex-around'

/* Task 4.4 - Set the CSS position property of subMenuEl to the value of absolute. */
subMenuEl.style.position = 'absolute'

/* Task 4.5 - Set the CSS top property of subMenuEl to the value of 0. */
// subMenuEl.style.top = '0px'

/* Task 5.1
    Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
    Declare a global showingSubMenu variable and initialize it to false; */

let topMenuLinks = []

menuLinks.forEach((arr, i)=>{
    const aTag = document.createElement('a')
    const link = document.createTextNode(menuLinks[i].text)
    // aTag.appendChild(link)
    // aTag.href = menuLinks[i].href[i]
    // topMenuLinks = aTag.href
    // // subMenuEl.appendChild(aTag)
    // console.log(topMenuLinks)
    
    for(let i=0; i<menuLinks.length; i++){
        let anotherArr =[]
        for(let j=0; j<menuLinks[i].length; j++){
            anotherArr.push()
        }

        topMenuLinks.push(anotherArr)
    }
})

console.log(topMenuLinks)
let showingSubMenu = false





/* Task 5.2
    - Attach a delegated 'click' event listener to topMenuEl.
    - The first line of code of the event listener function should call the event object's preventDefault() method.
    - The second line of code function should immediately return if the element clicked was not an <a>element.
    - console.log the content of the <a>to verify the handler is working. */

/* Task 5.3 - Next in the event listener, if the clicked <a>link has a class of active:
    - Remove the activeclass from the clicked <a> element.
    - Set the showingSubMenu to false.
    - Set the CSS topproperty of subMenuElto 0.
    - return to exit the handler. */

/* Task 5.4 - Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.
    Hint: Removing a non-existent class from an element does not cause an error, so just remove it! */

/* Task 5.5 -Next, the event listener should add a class name of activeto the <a>element that was clicked. */

topMenuEl.addEventListener('click', (event) =>{
    event.preventDefault()
    if(topMenuLinks == 'clicked') return
    if(document.querySelector('a').contains('active')) document.querySelector('a').classList.remove('active')
    showingSubMenu = false
    subMenuEl.style.top = '0px'
    topMenuLinks.classList.remove('active')

    
    return
})




























