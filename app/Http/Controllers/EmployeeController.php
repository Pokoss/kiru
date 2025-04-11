<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Carbon\Carbon;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $employees = Employee::latest()->paginate(10);
        return Inertia::render('DashboardUsersScreen', ['employees'=>$employees]);
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
            'name' => 'required',
        ]);
        $date = Carbon::now()->format('YmdHisv');     
        $file = $request->file('image');
        $filename = $request->name . '.' . $file->extension();
        $path = $file->storeAs('/images/team', $filename, ['disk' => 'public_uploads']);

        Employee::create([

            'name' => $request->name,
            'title' => $request->title,
            'about' => $request->about,
            'image' => $path,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        //
    }
}
