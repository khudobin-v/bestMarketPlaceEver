package com.kire.market_place_android.data.model

enum class DeliveryStatusEntity(
    val status: String
) {

    DENIED("denied"),
    READY("ready"),
    ON_THE_WAY("on the way"),
    DELIVERED("delivered")
}