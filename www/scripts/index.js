const memoList = document.querySelector('.memos');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const setupUI = (user) => {
  if (user) {
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
      <div>Logged in as ${user.email}</div>
    `;
    accountDetails.innerHTML = html;
    })
   

    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    accountDetails.innerHTML = '';
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}
// setup memos
const setupMemos = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const memo = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${memo.title} </div>
          <div class="collapsible-body white"> ${memo.content} </div>
        </li>
      `;
      html += li;
    });
    memoList.innerHTML = html
  } else {
    memoList.innerHTML = '<h5 class="center-align">Login to explore our amazing app please.</h5>';
  }
  

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});