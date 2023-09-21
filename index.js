const express = require('express');
const app = express();
const port = 3000;
const methodOverride = require('method-override');

app.use(express.urlencoded());
app.use(express.json());
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

app.use((req,res,next) =>{
console.log(`${req.method} request for ${req.url}`);
next()
})


const workouts = [
    { id: 1, name: 'Pushups' },
    { id: 2, name: 'Situps' },
    { id: 3, name: 'Jogging' },
]

app.get('/', (req, res) =>{
    res.send(`<button ><a href="/api/workouts""> workouts </a> </button> <button ><a href="/api/workouts/add""> add workouts </a> </button> `)
})

app.get('/api/workouts', (req,res) =>{
    res.render("workouts.ejs", {workouts})
})

app.get('/api/workouts/add', (req,res) =>{
    res.render('workoutForm.ejs');
})

// we will continue this on thusday
app.get('/api/workouts/add/:id', (req,res) =>{
    res.render('updateWorkout.ejs');
})

app.post('/api/workouts', (req, res)=>{

    console.log(req.body.name);

    const newWorkout ={
    id:workouts.length + 1,
    name: req.body.name
    };

    workouts.push(newWorkout);
    res.redirect('/api/workouts');

})


app.post('/api/workouts/delete/:id', (req,res)=>{

const workoutId = parseInt(req.params.id);

const index = workouts.findIndex(w => w.id === workoutId);

if(index !==-1){
    workouts.splice(index,1);
    // res.status(200).send(`Workout with ID ${workoutId} deleted.`)
    res.redirect('/api/workouts/')
}else{
    res.status(404).send(`Workout with ID ${workoutId} not found.`)
}
})

app.post('/api/workouts/update/:id', (req,res) => {
const workoutId = parseInt(req.params.id);
const updateName = req.body.name

const workout = workouts.find(w => w.id === workoutId);
console.log(workout);
if(workout){
    workout.name = updateName;
    // res.status(200).send(`Workout with ID ${workoutId} updated.`);
	res.redirect('/api/workouts')
}else{
    res.status(404).send(`Workout with ID ${workoutId} not found.`);

}

})


app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}/`);
})