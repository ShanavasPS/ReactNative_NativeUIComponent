package com.displaynativeview

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
// replace with your view's import
import com.displaynativeview.CustomView

class MyFragment(private val reactContext: ReactContext) : Fragment() {
    private lateinit var customView: CustomView

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View {
        super.onCreateView(inflater, container, savedInstanceState)
        customView = CustomView(requireNotNull(context), reactContext)
        return customView // this CustomView could be any view that you want to render
    }

    fun receiveFromReactNative(tab: String) {
        customView.modifyButton1Text(tab);
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        // do any logic that should happen in an `onCreate` method, e.g:
        // customView.onCreate(savedInstanceState);
    }

    override fun onPause() {
        super.onPause()
        // do any logic that should happen in an `onPause` method
        // e.g.: customView.onPause();
    }

    override fun onResume() {
        super.onResume()
        // do any logic that should happen in an `onResume` method
        // e.g.: customView.onResume();
    }

    override fun onDestroy() {
        super.onDestroy()
        // do any logic that should happen in an `onDestroy` method
        // e.g.: customView.onDestroy();
    }
}