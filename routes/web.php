<?php

use App\Http\Controllers\CareerController;
use App\Http\Controllers\FAQController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TestimonialController;
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
// Route::get('/gallery', fn() => Inertia::render('GalleryScreen'));
// Route::get('/projectlist', fn() => Inertia::render('ProjectlistScreen'));
// Route::get('/projectlist/project', fn() => Inertia::render('ProjectDetailsScreen'));
Route::get('/aboutus', fn() => Inertia::render('AboutScreen'));
Route::get('/careers', fn() => Inertia::render('CareersScreen'));
Route::get('/dashboard/home', fn() => Inertia::render('DashboardHomeScreen'));

Route::get('/', [HomeController::class, 'index']);

Route::get('/dashboard/projects', [ProjectController::class, 'index']);
Route::get('/projectlist', [ProjectController::class, 'viewProjects']);
Route::get('/projectlist/{slug}', [ProjectController::class, 'show']);
Route::post('/dashboard/projects/post', [ProjectController::class, 'store']);


Route::get('/gallery', [GalleryController::class, 'showGallery']);
Route::get('/dashboard/gallery', [GalleryController::class, 'index']);
Route::post('/dashboard/gallery/post', [GalleryController::class, 'store']);

Route::get('/dashboard/testimonials', [TestimonialController::class, 'index']);
Route::post('/dashboard/testimonials/post', [TestimonialController::class, 'store']);

Route::get('/dashboard/faqs', [FAQController::class, 'index']);
Route::post('/dashboard/faqs/post', [FAQController::class, 'store']);

Route::get('/careers', [CareerController::class, 'showCareers']);
Route::get('/dashboard/careers', [CareerController::class, 'index']);
Route::post('/dashboard/careers/post', [CareerController::class, 'store']);
require __DIR__.'/auth.php';

