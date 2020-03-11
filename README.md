# Blueprint Management 4 - Heavy Clients

### Autores:
- [Cesar Villamil](https://github.com/cvillamiljr)
- [Diego Puerto](https://github.com/Diego23p)

##### Comado para ejecutar: gradle bootRun


- Add to the canvas of the page an event handler that allows you to capture the 'clicks' made, either through the mouse, or through a touch screen. For this, consider this example of the use of events of type PointerEvent (not yet supported by all browsers) for this purpose. Remember that unlike the previous example (where the JS code is embedded in the view), it is expected to have the initialization of the event handlers correctly modularized, as shown in this codepen.

![](/BLUEPRINTS_PART1/img/23.jpg)

- Add what is needed in your modules so that when new points are captured on the open canvas (if a canvas has not been selected, nothing should be done):
    - The point is added at the end of the sequence of points on the current canvas (only in the application memory, NOT EVEN IN THE API!).
    ![](/BLUEPRINTS_PART1/img/24.jpg)
    - The drawing is repainted.
    ![](/BLUEPRINTS_PART1/img/25.jpg)

- Add the Save/Update button. Respecting the client's current module architecture, do that by pressing the button:
    - Perform PUT action, with the updated plan, in its corresponding REST resource.
    ![](/BLUEPRINTS_PART1/img/26.jpg)
    - Perform GET action to the resource /blueprints, to get back all the plans made.
    Se solicita ingresar el nonbre del BluePrint a adicionar los puntos:
    ![](/BLUEPRINTS_PART1/img/27.jpg)
    - The total points of the user are recalculated. 
    ![](/BLUEPRINTS_PART1/img/28.jpg)    

- For this note that the 'data' property of the object sent to $.ajax must be a jSON object (in text format). If the data you want to send is a JavaScript object, you can convert it to jSON with:

![](/BLUEPRINTS_PART1/img/29.jpg)

- Add the 'Create new blueprint' button, so that when pressed:
    - The current canvas is deleted.
    Al presionar el botón "Create new blue print", se borra el canvas pintado:
    ![](/BLUEPRINTS_PART1/img/30.jpg)
    - The name of the new 'blueprint' is requested (you decide how to do it).
    ![](/BLUEPRINTS_PART1/img/31.jpg)
    - This option should change the way the 'save / update' option works, because in this case, when pressed the first time you should (also, using promises): Post the resource / blueprints to create the new plan. GET to this same resource, to update the list of plans and the user's score.
    Se actualiza en la memoria, buscando "http://localhost:8080/blueprints":
    ![](/BLUEPRINTS_PART1/img/31.jpg)
