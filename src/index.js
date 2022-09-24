import './style.css';
import createProject from './modules/project';
import createSidebar from './modules/sidebar';
import createHeader from './modules/header';


let mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');

mainContainer.append(createHeader(), createSidebar(), createProject());

document.body.append(mainContainer);

add_not_clicked();

function add_not_clicked(){
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
}