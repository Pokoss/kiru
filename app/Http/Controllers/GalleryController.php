<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Str;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $gallery = Gallery::latest()->paginate(10);
        return Inertia::render('DashboardGalleryScreen',['gallery'=> $gallery]);
    }
    public function showGallery()
    {
        //
        $gallery = Gallery::latest()->paginate(10);
        return Inertia::render('GalleryScreen',['gallery'=> $gallery]);
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
        $gallery_name = $request->name . ' ' . Str::random();
        $gallery_slug = Str::slug($gallery_name, '-');

        $file = $request->file('imageurl');
        $filename = $image_slug . '.' . $file->extension();
        $path = $file->storeAs('/images/gallery', $filename, ['disk' => 'public_uploads']);

        $gallery = Gallery:: create([
            
            'name'=> $request->name,
            'status'=> $request->status,
            'details'=> $request->details,
            'type'=> $request->type,
            'slug'=> $gallery_slug,
            'imageurl'=>$path
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Gallery $gallery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gallery $gallery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Gallery $gallery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gallery $gallery)
    {
        //
    }
}
