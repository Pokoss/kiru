<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Carbon\Carbon;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::latest()->paginate(10);
        
        return Inertia::render('DashboardProjectScreen',['projects'=> $projects]);
    }
    public function viewProjects()
    {
        //
        $projects = Project::latest()->paginate(10);
        
        return Inertia::render('ProjectlistScreen',['projects'=> $projects]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
           
        ]);

        // return Response([$request->name]);

        $date = Carbon::now()->format('YmdHisv');
        $value = $request->name . ' ' . $date . ' ' . Str::random();
        $image_slug = Str::slug($value, '-');
        $project_name = $request->name . ' ' . Str::random();
        $project_slug = Str::slug($project_name, '-');

        $file = $request->file('imageurl');
        $filename = $image_slug . '.' . $file->extension();
        $path = $file->storeAs('/images/projects', $filename, ['disk' => 'public_uploads']);

        $project = Project:: create([
            
            'name'=> $request->name,
            'status'=> $request->status,
            'details'=> $request->details,
            'type'=> $request->type,
            'slug'=> $project_slug,
            'imageurl'=>$path
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request,$slug)
    {
        //
        $project = Project::where('slug',$slug)->first();
        return Inertia::render('ProjectDetailsScreen',['project'=> $project]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}
