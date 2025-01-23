<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Carbon\Carbon;
class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $testimonials = Testimonial::latest()->paginate(10);
        
        return Inertia::render('DashboardTestimonialScreen',['testimonials'=> $testimonials]);
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
      
        $testimonial_slug = Str::slug($value, '-');

        $testimonial = Testimonial:: create([
            
            'name'=> $request->name,
            'title'=> $request->title,
            'content'=> $request->content,
            'slug'=> $testimonial_slug,
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Testimonial $testimonial)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Testimonial $testimonial)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Testimonial $testimonial)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Testimonial $testimonial)
    {
        //
    }
}
