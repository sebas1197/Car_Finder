'use strict';

const result  = document.querySelector('#cars');

const year = document.querySelector('#year');
const brand = document.querySelector('#brand');
const minimum = document.querySelector('#minimum');
const max = document.querySelector('#max');
const doors = document.querySelector('#doors');
const transmission = document.querySelector('#transmission');
const color = document.querySelector('#color');

const max_year = moment().year();
const min_year = max_year - 10;

const data_search = {
    brand: '',
    year: '',
    min_price: '',
    max_price: '',
    doors: '',
    transmission: '',
    color: ''
}


document.addEventListener('DOMContentLoaded', () =>{
    show_cars(cars);
    years_select();
    events_listeners();
});

function events_listeners(){
    year.addEventListener('change', e =>{
        data_search.year = e.target.value;
        filter_car();
    });

    brand.addEventListener('change', e =>{
        data_search.brand = e.target.value;
        filter_car();
    });

    minimum.addEventListener('change', e =>{
        data_search.min_price = e.target.value;
        filter_car();
    });

    max.addEventListener('change', e =>{
        data_search.max_price = e.target.value;
        filter_car();
    });

    doors.addEventListener('change', e =>{
        data_search.doors = e.target.value;
        filter_car();
    });

    transmission.addEventListener('change', e =>{
        data_search.transmission = e.target.value;
        filter_car();
    });

    color.addEventListener('change', e =>{
        data_search.color = e.target.value;
        filter_car();
    });
}


function show_cars(cars){
    let espacio = `&nbsp;&nbsp;&nbsp;&nbsp;`;

    clearHTML();

    cars.forEach( car => {
        const {marca, modelo, year, precio, puertas, color, transmision} = car;
        result.innerHTML += `
        <div class="card">
            <img src="Img/car_icon.png" height="50px" width="50px" alt="auto"><br>
            <span><strong>Marca:</strong> ${espacio} ${marca}</span> <br>
            <span><strong>Modelo:</strong> ${espacio} ${modelo}</span> <br>
            <span><strong>Año:</strong> ${espacio} ${year}</span> <br>
            <span><strong>Precio:</strong> ${espacio} ${precio}</span> <br> 
            <span><strong>Puertas:</strong> ${espacio} ${puertas}</span> <br> 
            <span><strong>Color:</strong> ${espacio} ${color}</span> <br> 
            <span><strong>Transmision:</strong> ${espacio} ${transmision}</span> <br> 
        </div> <br>
        `;
    });
}

function clearHTML(){
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
}

function years_select(){
    let option;
    for(let i=max_year; i>=min_year; i--){
        option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}

function filter_car(){
    const filter_result = cars.filter(filter_brand).filter(filter_year).filter(filter_min).filter(filter_max).filter(filter_doors).filter(filter_transmission).filter(filter_color);

    if(filter_result.length){
        show_cars(filter_result);
    }else{
        not_result();
    }

}

function not_result(){
    clearHTML();

    const notResult = document.createElement('div');
    notResult.classList.add('alert','error');
    notResult.textContent = 'No se encontraron resultados!';
    result.appendChild(notResult);
}

function filter_brand(car){
    if(data_search.brand){
        return car.marca === data_search.brand;
    }
        return car; 
}

function filter_year(car){
    if(data_search.year){
        return car.year === parseInt(data_search.year);
    }
    return car;
}

function filter_min(car){
    if(data_search.min_price){
        return car.precio >= data_search.min_price;
    }    
    return car;
}

function filter_max(car){
    if(data_search.max_price){
        return car.precio <= data_search.max_price;
    }
    return car;
}

function filter_doors(car){
    if(data_search.doors){
        return car.puertas === parseInt(data_search.doors);
    }
    return car;
}

function filter_transmission(car){
    if(data_search.transmission){
        return car.transmision === data_search.transmission;
    }
    return car;
}

function filter_color(car){
    if(data_search.color){
        return car.color === data_search.color;
    }
    return car;
}




const watch = moment().year();
const year_copyright = document.getElementById('year_copyright');
year_copyright.innerHTML=watch;