## Thought Process 💭
#### Thought process while making task-manager application</h4>
This application is made using pure VanillaJs.

<img src="./styles/assets/img.png">

## Instructions

- Install live-server & hit ```live-server``` command 

## Description
It was great experience making task-manager app using Javascript only. It's a basic task-manger application which has following functionality:
``` - Create List
    - Delete List
    - Add task
    - Delete task
    - Edit task
    - Update status
    - Drag-Drop tasks among multiple task List
```
  
  ## Steps I followed while making this application
  -  First, I created a button to create a list ```container``` and then created a container with uniqueId that I need to maintain for the deleting process of the container.
  - Secondly, I created the delete-list button for deleting the particular list and append it with the ```container```.
  - Then, Created the ```task-holder container``` with uniqueId to bind all the task inside it then I  putted overflow-X: scroll on task-holder to scroll down or up all the tasks and then appened it with ```container-list```.
  - Finally, I created ```task container```that's also with uniqueId so that I can easily delete and drag it and than appended it with ```task-holder```.
  - At the last, I added drag-drop functionality for that I setted the data id on ```drag``` function in the context of "dataTransfer" and onDrop I picked that id data and appended with target node while dragging I added the style  border on the ```task-container``` also and on dropping again re-set the border style of the task-container
  
  
