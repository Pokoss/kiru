<?php

namespace App\Http\Controllers;

use App\Models\FAQ;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class FAQController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $faqs = FAQ::latest()->paginate(10);
        
        return Inertia::render('DashboardFAQScreen',['faqs'=> $faqs]);
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
            'question' => 'required',
            'answer' => 'required',
        ]);

        $faq_question = $request->question . ' ' . Str::random();
        $project_slug = Str::slug($faq_question, '-');
        $faq = FAQ:: create([
            'question'=> $request->question,
            'answer'=> $request->answer,
            'slug'=> $project_slug,
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(FAQ $fAQ)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FAQ $fAQ)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FAQ $fAQ)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FAQ $fAQ)
    {
        //
    }
}
