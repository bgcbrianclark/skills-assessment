// Get Users
const users = [
  {
    name: 'Christian',
    email: 'christian@mailinator.com',
    phone: '555.555.5555',
    address: [
      '6539 Wilton Ave',
      'Culver City, CA 90234'
    ],
    status: 'active'
  },
  {
    name: 'Rich',
    email: 'rich@mailinator.com',
    phone: '555.555.5555',
    address: [
      '6539 Wilton Ave',
      'Culver City, CA 90234'
    ],
    status: 'active'
  },
  {
    name: 'Scott',
    email: 'scott@mailinator.com',
    phone: '555.555.5555',
    address: [
      '6539 Wilton Ave',
      'Culver City, CA 90234'
    ],
    status: 'active'
  },
  {
    name: 'Danny',
    email: 'danny@mailinator.com',
    phone: '555.555.5555',
    address: [
      '6539 Wilton Ave',
      'Culver City, CA 90234'
    ],
    status: 'active'
  },
  {
    name: 'Taka',
    email: 'taka@mailinator.com',
    phone: '555.555.5555',
    address: [
      '6539 Wilton Ave',
      'Culver City, CA 90234'
    ],
    status: 'away'
  },
  {
    name: 'Tim',
    email: 'tim@mailinator.com',
    phone: '555.555.5555',
    address: [
      '6539 Wilton Ave',
      'Culver City, CA 90234'
    ],
    status: 'busy'
  },
  {
    name: 'Patrick',
    email: 'patrick@mailinator.com',
    phone: '555.555.5555',
    address: [
      '6539 Wilton Ave',
      'Culver City, CA 90234'
    ],
    status: 'active'
  },
  {
    name: 'Jacques',
    email: 'jacques@mailinator.com',
    phone: '555.555.5555',
    address: [
      '6539 Wilton Ave',
      'Culver City, CA 90234'
    ],
    status: 'busy'
  },

]

const app = document.querySelector('#app');
const userList = app.querySelector('ul');
const contactSelect = document.querySelector('#contactSelect');

// Build list, add to HTML
function populateList() {

  // Clear list
  userList.innerHTML = '';

  users.forEach(user => {

    // Create user HTML
    let li= document.createElement('li');
    let contactOption = document.querySelector('#contactSelect').value;
    li.classList.add(user.status);
    let listInternal = `
      <span class="status ${user.status}"></span>
      <span class="name">${user.name}</span>
      <span class="contact">${user[contactOption]}</span>
      <span class="address">
        <address class="">
          <p><a href="mailto:${user.email}" target="_blank">${user.email}</a></p>
          <p>${user.phone}</p>
          <p>${user.address[0]}<br/>
          ${user.address[1]}</p>
        </address>
      </span>
    `;

    // Push to browser
    li.innerHTML = listInternal;
    userList.appendChild(li);
  });

  // Show full contact address on click
  let userButtons = document.querySelectorAll('ul li');
  userButtons.forEach(btn => {
    btn.addEventListener('click',function(e) {
      userList.classList.remove('open');
      userButtons.forEach(btn => {
        btn.classList.remove('open');
      });
      userList.classList.add('open');
      btn.classList.add('open');
    });
  });

  // close focus on clicking out of target li
  userList.addEventListener('click',function(e) {
    if (e.target.classList.contains('open')) {
      userList.classList.remove('open');
      userButtons.forEach(btn => { btn.classList.remove('open') });
    }
  })
}

// Populate initial list
populateList();

// Repopulate list on changing from email <> phone
contactSelect.addEventListener('change',function() {
  populateList();
});
