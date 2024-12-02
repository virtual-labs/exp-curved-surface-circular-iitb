let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Hydrostatic force on curved surface (circular)</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act1-div'>
      <h3>Activity 1</h3>
      <br>
      <img src="./images/sim1.png" style='width: 25%;' alt="" srcset="">
      <br>
      <br>
      <p style="text-align:left;">
         Calculate the horizontal and vertical component of the total force acting on a curved surface 'AB' which is quadrant of a circle of radius ${r}m. 
      </p>
      <p style="text-align:left;">
         The depth(h) of centre(O) from free surface of water is ${h}m.
      </p>
      <p style="text-align:left;">
         The width of the gate is unity. Also compute resultant and inclination with horizontal.
      </p>
      <br>
      <div class="row justify-content-center">
         <p class="col-md-4">
            r = ${r} m  
         </p>
         <p class="col-md-4">
            h = ${h} m 
         </p>
      </div>
      <p style="text-align:left;">
         Projected area on vertical plane.
      </p>
      <div id="act1-a-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$ A = r \× width =$$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-a-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_a();'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function internal_calculation1() {
    r = 0;
    h = 0;
    h_bar = 0;
    a = 0;
    fx = 0;
    fy = 0;
    Ig = 0;
    h_star = 0;
    F = 0;
    incli = 0;
    r = parseFloat(random(2, 3.1).toFixed(1));
    h = parseFloat(random(1.5, 2).toFixed(1));
    h_bar = parseFloat((h + r / 2).toFixed(3));
    a = r;
    fx = parseFloat((1000 * g * a * h_bar).toFixed(3));
    Ig = parseFloat((Math.pow(r, 3) / 12).toFixed(3));
    h_star = parseFloat((Ig / (a * h_bar) + h_bar).toFixed(3));
    fy = parseFloat((1000 * g * h * r * 1 + (Math.PI / 4) * Math.pow(r, 2) * 1).toFixed(3));
    F = parseFloat(Math.sqrt(Math.pow(fx, 2) + Math.pow(fy, 2)).toFixed(3));
    incli = parseFloat((Math.atan2(fy, fx) * (180 / Math.PI)).toFixed(2));
}
function verify_a() {
    let inp = (document.getElementById('act1-a-inp'));
    console.log(a);
    if (!verify_values(parseFloat(inp.value), a)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-a-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
         A = r \× width = ${a} \\ m^2
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn5" onclick='load_h_div();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_h_div() {
    let btn = (document.getElementById('act1-btn5'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <div id="act1-h-bar-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$ \\bar{h} = h + \\frac{r}{2} =$$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-h-bar-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_h_bar();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_h_bar() {
    let inp = (document.getElementById('act1-h-bar-inp'));
    console.log(h_bar);
    if (!verify_values(parseFloat(inp.value), h_bar)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-h-bar-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
      $$ \\bar{h} = h + \\frac{r}{2} = ${h_bar} \\ m$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn1" onclick='load_horizontal_force();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_horizontal_force() {
    let btn = (document.getElementById('act1-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;">
         Horizontal force f<sub>x</sub>
      </p>
      <p>
         f<sub>x</sub> = total pressure force on OB
      </p>
      <div id="act1-fx">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  f_x = \ρgA\\bar{h} =  
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-fx-inp' class='form-control fs-16px' /> <span style="display:contents;">N</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_resultant_x();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_resultant_x() {
    let inp = (document.getElementById('act1-fx-inp'));
    console.log(fx);
    if (!verify_values(parseFloat(inp.value), fx)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-fx'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ f_x = \ρgA\\bar{h} = ${fx} \\ N$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn2" onclick='load_inertia_div();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_inertia_div() {
    let btn = (document.getElementById('act1-btn2'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;">
         Moment of inertia about centre of gravity
      </p>
      <div id="act1-inertia-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  I_g = \\frac{bd^3}{12} =
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-i-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>4</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_i();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_i() {
    let inp = (document.getElementById('act1-i-inp'));
    console.log(Ig);
    if (!verify_values(parseFloat(inp.value), Ig)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-inertia-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ I_g = \\frac{bd^3}{12} = ${Ig} \\ m^4$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn3" onclick='load_depth_div();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_depth_div() {
    let btn = (document.getElementById('act1-btn3'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;">
         Depth of centre of pressure
      </p>
      <div id="act1-depth-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  h^* = \\frac{I_g}{A\\bar{h}} + \\bar{h} = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-h-star-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_depth_centre_of_pressure();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_depth_centre_of_pressure() {
    let inp = (document.getElementById('act1-h-star-inp'));
    console.log(h_star);
    if (!verify_values(parseFloat(inp.value), h_star)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-depth-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ h^* = \\frac{I_g}{A\\bar{h}} + \\bar{h} = ${h_star} \\ m$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn4" onclick='load_vertical_force();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_vertical_force() {
    let btn = (document.getElementById('act1-btn4'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;">
         Vertical force f<sub>y</sub>
      </p>
      <p>
         vertical component of force = weight of water supported by AB
      </p>
      <p>
         f<sub>y</sub> = weight of DAOC + weight of AOB
      </p>
      <div id="act1-fy-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-5">
               $$
                  f_y = \ρg[AD \× AO \× 1 + \\frac{\π}{4}(AO)^2\× 1] = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-fy-inp' class='form-control fs-16px' /> <span style="display:contents;">N</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_resultant_y();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_resultant_y() {
    let inp = (document.getElementById('act1-fy-inp'));
    console.log(fy);
    if (!verify_values(parseFloat(inp.value), fy)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-fy-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ f_y = \ρg[AD \× AO \× 1 + \\frac{\π}{4}(AO)^2\× 1] = ${fy} \\ N$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn6" onclick='load_resultant_div();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_resultant_div() {
    let btn = (document.getElementById('act1-btn6'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <div>
      <p style="text-align:left;">
         Resultant
      </p>
      <div id="act1-resultant-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  F = \\sqrt{(f_{x})^2 + (f_{y})^2} =  
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-f-inp' class='form-control fs-16px' /> <span style="display:contents;">N</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_resultant();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_resultant() {
    let inp = (document.getElementById('act1-f-inp'));
    console.log(F);
    if (!verify_values(parseFloat(inp.value), F)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-resultant-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ F = \\sqrt{(f_{x})^2 + (f_{y})^2} = ${F} \\ N$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn7" onclick='load_inclination();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_inclination() {
    let btn = (document.getElementById('act1-btn7'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <div>
      <p style="text-align:left;">
         Inclination with horizontal
      </p>
      <div id="act1-inclination-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  \θ = tan^{-1}\\left(\\frac{f_y}{f_x}\\right) =  
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-inclination-inp' class='form-control fs-16px' /> <span style="display:contents;">&deg;</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_inclination();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_inclination() {
    let inp = (document.getElementById('act1-inclination-inp'));
    console.log(incli);
    if (!verify_values(parseFloat(inp.value), incli)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-inclination-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ \θ = tan^{-1}\\left(\\frac{f_y}{f_x}\\right) = ${incli} \°$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn8" onclick='exp_complete();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function exp_complete() {
    let btn = document.getElementById('act1-btn8');
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map