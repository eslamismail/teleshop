<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('mobile')->nullable();
            $table->text('fcm_token')->nullable();
            $table->string('profile_picture')->nullable();
            $table->timestamp('subscribed_at')->nullable();
            $table->timestamp('subscription_end_at')->nullable();
            $table->integer('subscription_days')->nullable();
            $table->unsignedBigInteger('subscription_id')->nullable();
            $table->enum('type', ['user', 'vendor'])->default('user');
            $table->date('birthdate')->nullable();
            $table->string('email')->unique()->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
