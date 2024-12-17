<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use function Termwind\render;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('HomeScreen', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/buildings', fn() => Inertia::render('BuildingConstructionScreen'));
Route::get('/water-and-sanitation', fn() => Inertia::render('WaterConstructionScreen'));
Route::get('/road-and-drainage', fn() => Inertia::render('RoadConstructionScreen'));
Route::get('/equipment', fn() => Inertia::render('EquipmentScreen'));
Route::get('/gallery', fn() => Inertia::render('GalleryScreen'));
Route::get('/projectlist', fn() => Inertia::render('ProjectlistScreen'));
Route::get('/projectlist/details', fn() => Inertia::render('ProjectDetailsScreen'));
Route::get('/aboutus', fn() => Inertia::render('AboutScreen'));
Route::get('/careers', fn() => Inertia::render('CareersScreen'));
Route::get('/dashboard/home', fn() => Inertia::render('DashboardHomeScreen'));

Route::get('/dashboard/projects', [ProjectController::class, 'index']);
Route::post('/dashboard/projects/post', [ProjectController::class, 'store']);
require __DIR__.'/auth.php';
