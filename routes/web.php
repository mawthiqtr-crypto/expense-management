<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
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
    Route::resource('expenses', \App\Http\Controllers\ExpenseController::class)->only(['index', 'create', 'store', 'show']);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/components', function () {
        return Inertia::render('ComponentsGallery');
    })->name('components.gallery');
});

require __DIR__.'/auth.php';

Route::prefix('api')->middleware('auth')->group(function () {
    Route::apiResource('expense-categories', \App\Http\Controllers\ExpenseCategoryController::class);
    Route::apiResource('expense-items', \App\Http\Controllers\ExpenseItemController::class);
    Route::apiResource('accounts', \App\Http\Controllers\AccountController::class);
});
