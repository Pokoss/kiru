<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

class HomeController extends Controller
{
    //
    public function index()
    {
        $projects = Project::latest()->limit(3)->get();
        $testimonials = Testimonial::latest()->get();

        return Inertia::render(
            'HomeScreen',
            [
                'projects' => $projects,
                'testimonials' => $testimonials,
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
                'laravelVersion' => Application::VERSION,
                'phpVersion' => PHP_VERSION,
            ]
        );
    }
}
