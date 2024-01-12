package com.displaynativeview

import android.content.Context
import android.graphics.Color
import android.widget.FrameLayout
import android.widget.TextView
import android.widget.Button
import android.widget.LinearLayout
import android.widget.LinearLayout.LayoutParams
import java.util.Random

class CustomView(context: Context) : FrameLayout(context) {
    init {
        // set padding and background color
        setPadding(16,16,16,16)
        setBackgroundColor(Color.parseColor("#5FD3F3"))
        var randomValue = Random().nextInt(100) + 1
        // create a vertical LinearLayout for text and buttons
        val contentContainer = LinearLayout(context).apply {
            orientation = LinearLayout.VERTICAL
            gravity = android.view.Gravity.CENTER
        }

        // add default text view to the LinearLayout
        val textView = TextView(context).apply {
            text = "$randomValue"
            gravity = android.view.Gravity.CENTER
        }
        contentContainer.addView(textView, LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT).apply {
            bottomMargin = 50 // 50-pixel margin at the bottom
        })


        // add first button
        val button1 = Button(context).apply {
            text = "Generate"
            setOnClickListener {
                randomValue = Random().nextInt(100) + 1 // Generates a random number between 1 and 100
                textView.text = "$randomValue"
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