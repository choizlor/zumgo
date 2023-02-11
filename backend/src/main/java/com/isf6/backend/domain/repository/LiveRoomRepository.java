package com.isf6.backend.domain.repository;

import com.isf6.backend.domain.entity.LiveRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LiveRoomRepository extends JpaRepository<LiveRoom, Long> {

    @Query("select r from LiveRoom r where r.product.id = :productId")
    LiveRoom findByProductId(@Param("productId") long productId);

    @Query("select r from LiveRoom r " +
            "join LiveRequest lr " +
            "on lr.product.id = r.product.id and lr.user.userCode = :userCode " +
            "where r.live_status = 'ONAIR'")
    List<LiveRoom> getStartLiveRoomList(@Param("userCode") long userCode);

}
