package com.kire.market_place_android.domain.use_case.manager

import com.kire.market_place_android.domain.repository.IPickUpPointRepository
import javax.inject.Inject

class UpdateOrderStatusUseCase @Inject constructor(
    private val pickUpPointRepository: IPickUpPointRepository
) {
    operator fun invoke() {
        /* TODO */
    }
}