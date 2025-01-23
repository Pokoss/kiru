<?php

namespace App\Http\Controllers;

use App\Models\Career;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Carbon\Carbon;

class CareerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $careers = Career::latest()->paginate(10);
        
        return Inertia::render('DashboardCareerScreen',['careers'=> $careers]);
    }

    public function showCareers()
    {
        //
        // $careers = Career::latest()->paginate(10);
        
        return Inertia::render('CareersScreen',);

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
        $value = $request->title . ' ' . $date . ' ' . Str::random();
      
        $career_slug = Str::slug($value, '-');

        $testimonial = Career:: create([
            
            'name'=> $request->title,
            'title'=> $request->description,
            'description'=> $request->closes,
            'location'=> $request->location,
            'slug'=> $career_slug,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Career $career)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Career $career)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Career $career)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Career $career)
    {
        //
    }
}
