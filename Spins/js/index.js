            const images = [
                "img/imagen1.jpg",
                "img/imagen2.jpg",
                "img/imagen3.jpg",
                "img/imagen4.jpg",
                "img/imagen5.jpg",
                "img/imagen6.jpg",
                "img/imagen7.jpg",
                "img/imagen8.jpg",
                "img/imagen9.jpg",
                "img/imagen10.jpg",
                "img/imagen11.jpg",
                "img/imagen12.jpg",
                "img/imagen13.jpg",
                "img/imagen14.jpg",
                "img/imagen15.jpg",
                "img/imagen16.jpg",
                "img/imagen17.jpg",
                "img/imagen18.jpg",
                "img/imagen19.jpg",
                "img/imagen20.jpg",
                "img/imagen21.jpg",
                "img/imagen22.jpg",
                "img/imagen23.jpg",
                "img/imagen24.jpg",
                "img/imagen25.jpg",
                "img/imagen26.jpg",
                "img/imagen27.jpg",
                "img/imagen28.jpg",
                "img/imagen29.jpg",
                "img/imagen30.jpg",
                "img/imagen31.jpg",
                "img/imagen32.jpg",
                "img/imagen33.jpg",
                "img/imagen34.jpg",
                "img/imagen35.jpg",
                "img/imagen36.jpg",
                "img/imagen37.jpg",
                "img/imagen38.jpg",
                "img/imagen39.jpg",
                "img/imagen40.jpg",
                "img/imagen41.jpg",
                "img/imagen42.jpg",
                "img/imagen43.jpg",
                "img/imagen44.jpg",
                "img/imagen45.jpg",
                "img/imagen46.jpg",
                "img/imagen47.jpg",
                "img/imagen48.jpg",
                "img/imagen49.jpg",
                "img/imagen50.jpg",
                "img/imagen51.jpg",
                "img/imagen52.jpg",
                "img/imagen53.jpg",
                "img/imagen54.jpg",
                "img/imagen55.jpg",
                "img/imagen56.jpg",
                "img/imagen57.jpg",
                "img/imagen58.jpg",
                "img/imagen59.jpg",
                "img/imagen60.jpg",
                "img/imagen61.jpg",
                "img/imagen62.jpg",
                "img/imagen63.jpg",
                "img/imagen64.jpg",
                "img/imagen65.jpg",
                "img/imagen66.jpg",
                "img/imagen67.jpg",
                "img/imagen68.jpg",
                "img/imagen69.jpg",
                "img/imagen70.jpg",
                "img/imagen71.jpg",
                "img/imagen72.jpg",
                "img/imagen73.jpg",
                "img/imagen74.jpg",
                "img/imagen75.jpg",
                "img/imagen76.jpg",
                "img/imagen77.jpg",
                "img/imagen78.jpg",
                "img/imagen79.jpg",
                "img/imagen80.jpg",
                "img/imagen81.jpg",
                "img/imagen82.jpg",
                "img/imagen83.jpg",
                "img/imagen84.jpg",
                "img/imagen85.jpg",
                "img/imagen86.jpg",
                "img/imagen87.jpg",
                "img/imagen88.jpg",
                "img/imagen89.jpg",
              
              
              ];
                          
                          // Selecciona un botón y cambia la imagen
                          function selectButton(button) {
                            // Quita la clase "selected" de todos los botones
                            const buttons = document.querySelectorAll(".button");
                            buttons.forEach(b => b.classList.remove("selected"));
                          
                            // Añade la clase "selected" al botón seleccionado
                            button.classList.add("selected");
                          
                            // Cambia la imagen
                            const imageIndex = button.getAttribute("data-image");
                            document.querySelector(".image").src = images[imageIndex - 1];
                          }
                          
                          // Asigna el evento click a cada botón
                          const buttons = document.querySelectorAll(".button");
                          buttons.forEach(button => button.addEventListener("click", () => selectButton(button)));