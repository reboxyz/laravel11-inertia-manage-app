<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required',
                        'string',
                        'email',
                        'max:255',
                        Rule::unique('users') // ->ignore($this->id)
                    ],
            'password' => ['required',
                           'confirmed', // password_confirmation should be the same values
                           Password::min(8)->letters()->symbols()]
        ];
    }
}
