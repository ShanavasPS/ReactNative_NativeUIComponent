package com.displaynativeview

import android.content.Context
import android.graphics.Color
import android.widget.FrameLayout
import android.widget.TextView
import android.widget.Button
import android.widget.LinearLayout
import android.widget.LinearLayout.LayoutParams

class CustomView(context: Context) : FrameLayout(context) {
    init {
        // set padding and background color
        setPadding(16,16,16,16)
        setBackgroundColor(Color.parseColor("#5FD3F3"))

        // create a vertical LinearLayout for text and buttons
        val contentContainer = LinearLayout(context).apply {
            orientation = LinearLayout.VERTICAL
            gravity = android.view.Gravity.CENTER
        }

        // add default text view to the LinearLayout
        val textView = TextView(context).apply {
            text = "Welcome to Android Fragments with React Native."
            gravity = android.view.Gravity.CENTER
        }
        contentContainer.addView(textView)


        // add first button
        val button1 = Button(context).apply {
            text = "Generate"
            setOnClickListener {
                // Handle button click for Button 1
            }
        }
        contentContainer.addView(button1)

        // add second button
        val button2 = Button(context).apply {
            text = "Send to RN"
            setOnClickListener {
                // Handle button click for Button 2
            }
        }
        contentContainer.addView(button2)

        // add the LinearLayout to the CustomView
        addView(contentContainer, LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT).apply {
            gravity = android.view.Gravity.CENTER
        })
    }
}