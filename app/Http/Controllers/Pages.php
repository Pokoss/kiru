<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\FAQ;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Pages extends Controller
{
    //

    public function home()
    {

    }

    public function about()
    {
        $employes = Employee::latest()->get();
        $faqs = FAQ::all();
        $ongoing_project_count = Project::where('status','Ongoing')->count();
        $complete_project_count = Project::where('status','Complete')->count();

        return Inertia::render('AboutScreen', ['employees' => $employes, 'faqs'=> $faqs, 'complete'=>$complete_project_count, 'ongoing'=>$ongoing_project_count]);

    }
}
