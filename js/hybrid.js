let image = document.getElementById('image');
        let left = document.getElementsByClassName('left');
        let right = document.getElementsByClassName('right');

        let slideImage = new Array('cars/car1.jpg', 'cars/car2.jpg', 'cars/car3.jpg', 'cars/car4.jpg',
            'cars/car5.jpg', 'cars/car6.jpg', 'cars/car7.jpg', 'cars/car8.jpg');
        let count = 0;
        image.src = slideImage[count];

        function auto() {
            setInterval(() => {
                count++;

                if (document.images) {
                    if (count == slideImage.length) {
                        count = 0;
                    }
                    image.src = slideImage[count];
                }
            }, 5000);
        }

        function manual(button) {
            if (button == 'previous') {
                count--;
            }

            if (button == 'next') {
                count++;
            }

            if (count > (slideImage.length - 1)) {
                count = 0;
            }

            if (count < 0) {
                count = slideImage.length - 1;
            }
            image.src = slideImage[count];
        }